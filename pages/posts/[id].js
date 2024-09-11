import { useRouter } from "next/router"
import Link from "next/link";

export default function Post(){
  const router = useRouter();
  console.log()

  return(
    <div>
      Página de post: {router.query.id}

      <Link href='/'>
        go to home
      </Link>
    </div>
  )
}
