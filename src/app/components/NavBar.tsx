'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {useRouter} from 'next/navigation'
import { getCookie,hasCookie,setCookie , CookieValueTypes } from 'cookies-next'

export function NavBar ()  {
  
    const router = useRouter()

    const languages = [
        {title: 'EN' , label: 'English' , value: '/auto/en'},
        {title: 'FR' ,label: 'French' , value: '/auto/fr'}
    ]

    const [selected,setSelected] = React.useState<CookieValueTypes>('')
    const [selectedTitle, setSelectedTitle] = React.useState<CookieValueTypes>('EN')

    const googleTranslateElementInit = () => {

        new window.google.translate.TranslateElement({
            pageLanguage: 'auto',
            autoDisplay: false,
            includedLanguages: "en,fr",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
            'google_translate_element');
    }

    React.useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
        
        let googleTrans = getCookie('googtrans')

        if(hasCookie('googtrans')){
            setSelected(googleTrans)
            }
            else{
            setSelected('/auto/en')
            setCookie('lang' , 'EN')
            }
            setSelectedTitle(getCookie('lang'))
    }, [])

    function handleChange(e: any){
        // console.log("handleChange" , e)
        setCookie('lang' , e.title)
       if(hasCookie('googtrans')){
         setCookie('googtrans',decodeURI(e?.value))
         setSelected(e)
         setSelectedTitle(e?.title)
       }
       else{
          setCookie('googtrans',e?.value)
          setSelected(e?.value)
          setSelectedTitle(e?.title)
       }
       window.location.reload()
    }
    
   return (
    <div>
        <div className="navbar flex-wrap">
            <div className="md:flex-1 w-full mx-auto">
                 <Link href="/" className="w-full">
                     <Image 
                       src="/Logo.svg"
                       alt="Dynamo Logo"
                       width={120}
                       height={20}
                     />
                 </Link>
            </div>
            <div className="md:flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link className="" href="/">
                            <h3 className="font-sora text-sm font-medium">Personal</h3>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <h3 className="font-sora text-sm font-medium">Business</h3>
                        </Link>
                    </li>
                    <li>
                        <button className="btn btn-outline font-sora text-sm font-medium normal-case" onClick={() => router.push('/join')}>Join us</button>
                    </li>
                    <li tabIndex={0}>
                        <a className="font-sora text-sm font-medium notranslate">{selectedTitle}</a>
                        <ul className="p-2">
                            {
                                languages.map((language) => {
                                   return (
                                    <li key={language.title} onClick={() => handleChange(language)}><a className="font-sora text-sm font-medium notranslate">{language.title}</a></li>
                                   )
                                })
                            }
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div id="google_translate_element" style={{width:'0px',height:'0px',position:'absolute',left:'50%',zIndex:-99999}}></div>
    </div>
   )
}

