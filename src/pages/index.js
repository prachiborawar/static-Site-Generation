import Link from "next/link"

export default function Home({ }) {
  return (
    <>
      <div className="text-center">
        <Link href={"/home"} className=" text-xl">go to home</Link>
      </div>

    </>
  )
}
