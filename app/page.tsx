import Maxwidth from "@/components/Maxwidth";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownIcon, ArrowDownToDotIcon, ArrowDownToLineIcon, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";


const perk =[
  {
    name:"Instant Delivery",
    icon: ArrowDownToLineIcon,
    description:'get your assets deliverd to your emil in a second, and download the right away'
  },
  {
    name:"Garantied Quality",
    icon: CheckCircle,
    description:'Every product is veryfied by our team to ensure the high quality standarts. not happy? we have 30 days refund garunty'
  },
  {
    name:"Plant for you",
    icon: Leaf,
    description:'We have 1% of product for sell and rest of the for rastoration in the natural environment'
  },
]

export default function Home() {
  return (
  <>
    <Maxwidth>
      <div className="py-20 mx-auto flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Marketplace for High Quality{' '}<span className="text-violet-600">Digital Assets</span></h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">High quality Best Product for sevaral discount and Trusted for evry parspective.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>Tranding Browser</Link>
          <Button variant="ghost">Ensure Best Quality &rarr;</Button>
        </div>
      </div>
      {/* TODO list product */}
    </Maxwidth>
    <section>
      <Maxwidth className="py-20 bg-slate-50">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perk.map((perk) =>(
            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center" key={perk.name}>
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-violet-100 text-violet-900">
                  {<perk.icon className="h-1/3 w-1/3"/>}
                </div>
              </div>     
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="font-medium text-gray-900">{perk.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Maxwidth>
    </section>
  </>
  );
}
