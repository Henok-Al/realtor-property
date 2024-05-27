"use client";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const pathname = usePathname();
  console.log(router);
  console.log(id);
  console.log(name);
  console.log(pathname);
  return (
    <div>
      PropertyPage
      <button
        className="block bg-blue-100 p-2"
        onClick={() => router.replace("/")}
      >
        Back to Home
      </button>
    </div>
  );
};
export default PropertyPage;
