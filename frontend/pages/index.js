import Link from "next/link";
import Card, { CardTitle } from "../components/Card";
import { Button } from "../components/Input";

export default function Home() {
  return (
    <div>
      <Card>
        <CardTitle className="text-center">Welkom bij [..]</CardTitle>
        <p className="text-zinc-600 px-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, felis ut tincidunt dictum, elit risus congue tellus, quis molestie nibh neque non diam. Sed accumsan malesuada semper. Donec facilisis sed nulla at lacinia. Nullam lacinia massa non accumsan ultricies. </p>
        
        <div className="flex flex-col items-stretch gap-3 mt-6 mb-2">
          <Link href="/login"><span className="self-center"><Button large>Inloggen</Button></span></Link>
          <Link href="/register"><span className="self-center"><Button large>Registreren</Button></span></Link>
        </div>
      </Card>
    </div>
  )
}
