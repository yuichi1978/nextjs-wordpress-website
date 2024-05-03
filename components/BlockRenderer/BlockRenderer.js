import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { theme } from "theme";
import Image from "next/image";
import { PropertySearch } from "components/PropertySearch";
import { FormspreeForm } from "components/FormspreeForm";
import { PropertyFeatures } from "components/PropertyFeatures";
import { Gallery } from "components/Gallery";
import { TickItem } from "components/TickItem";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/tickitem": {
        return (
          <TickItem key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </TickItem>
        );
      }
      case "core/gallery": {
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3}
            cropImage={block.attributes.imageCrop}
            items={block.innerBlocks}
          />
        );
      }
      case "acf/propertyfeatures": {
        return (
          <PropertyFeatures
            key={block.id}
            price={block.attributes.price}
            bathrooms={block.attributes.bathrooms}
            bedrooms={block.attributes.bedrooms}
            hasParking={block.attributes.has_parking}
            petFriendly={block.attributes.pet_friendly}
          />
        );
      }
      case "acf/formspreeform": {
        return (
          <FormspreeForm
            key={block.id}
            formId={block.attributes.data.form_id}
          />
        );
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/post-title": {
      }
      case "acf/propertysearch": {
        return <PropertySearch key={block.id} />;
      }
      case "core/heading": {
        return (
          <Heading
            key={blocks.id}
            content={block.attributes.content}
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
          />
        );
      }
      case "core/cover": {
        console.log("BLOCKS: ", blocks);
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} key={block.id} />
          </Cover>
        );
      }
      case "core/columns": {
        console.log("COLUMNS: ", block.attributes);
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        return (
          <Column key={block.id} width={block.attributes} >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/group": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/block": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/image": {
        return (
          <Image
            src={block.attributes.url}
            width={block.attributes.width}
            height={block.attributes.height}
            alt={block.attributes.alt || ""}
            key={block.id}
          />
        );
      }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  });
};
