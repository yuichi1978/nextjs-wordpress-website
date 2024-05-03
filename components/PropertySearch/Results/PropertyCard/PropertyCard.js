import Link from "next/link";
import Image from "next/image";
import numeral from "numeral";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaDog } from "react-icons/fa";

export const PropertyCard = ({
  title,
  destination,
  image,
  bedrooms,
  bathrooms,
  price,
  hasParking,
  petFirendly,
}) => {
  return (
    <Link href={destination} legacyBehavior>
      <a className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
        <div className="flex w-full">
          <Image
            src={image}
            width={300}
            height={300}
            className="object-cover overflow-hidden h-[150px]"
            alt=""
          />
        </div>
        <div className="mt-3 text-md font-bold">{title}</div>
        <div className="text-sm">¥{numeral(price).format("0,0")}</div>
        <div className="flex justify-between text-sm mt-3">
          <p className="flex items-center gap-2">
            <FaBath />
            <span>{bathrooms} bathrooms</span>
          </p>
          <p className="flex items-center gap-2">
            <FaBed />
            <span>{bedrooms} bedrooms</span>
          </p>
        </div>

        {(hasParking || petFirendly) && (
          <div className="flex justify-between text-sm mt-3">
            <div>
              {hasParking && (
                <div>
                  <FaCar />
                  parking available
                </div>
              )}
            </div>
            <div>
              {petFirendly && (
                <>
                  <FaDog />
                  parking available
                </>
              )}
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};
