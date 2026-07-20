import Link from "next/link";

export default function TileCard({ tile }) {
  var img1 = tile.image;
  var title1 = tile.title;
  var desc1 = tile.description;
  var id1 = tile.id;
  var link1 = "/tile/" + id1;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      <figure>
        <img src={img1} alt={title1} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-lg">{title1}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{desc1}</p>
        <div className="card-actions justify-end mt-2">
          <Link href={link1} className="btn btn-sm btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}