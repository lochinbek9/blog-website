
 import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup, FooterTitle, FooterIcon } from "flowbite-react"
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs"

 import { Link } from "react-router-dom"
function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className=" mt-5">
                <Link to="/" className="font-bold text-2xl">
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                    rounded-lg text-white">LODE-X'</span>
                    BLOG
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <FooterTitle title="About"/>
                        <FooterLinkGroup col>
                            <FooterLink target="_blank" rel="noopener noreferrer">
                                100 js Projects
                            </FooterLink>
                            <FooterLink href="/about" target="_blank" rel="noopener noreferrer">
                                LOCHINBEK'S BLOG
                            </FooterLink>
                        </FooterLinkGroup>
                    </div>

                    <div>
                        <FooterTitle title="Follow Us"/>
                        <FooterLinkGroup col>
                            <FooterLink target="_blank" rel="noopener noreferrer">
                              Github
                            </FooterLink>
                            <FooterLink href="discord" >
                                Discord
                            </FooterLink>
                        </FooterLinkGroup>
                    </div> 

                    <div>
                        <FooterTitle title="Legal"/>
                        <FooterLinkGroup col>
                            <FooterLink href="#"> 
                              Terms &amp; Conditions
                            </FooterLink>
                            <FooterLink href="discord" >
                                Discord
                            </FooterLink>
                        </FooterLinkGroup>
                    </div> 
                </div>
            </div>
            <FooterDivider/>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <FooterCopyright href="#" by="Lochinbek's blog" year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-3 mt-4 sm:justify-center">
                   <FooterIcon href="#" icon={BsFacebook}/>
                   <FooterIcon href="#" icon={BsInstagram}/>
                   <FooterIcon href="#" icon={BsGithub}/>
                   <FooterIcon href="#" icon={BsTwitterX}/>
                   <FooterIcon href="#" icon={BsDribbble}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default FooterCom