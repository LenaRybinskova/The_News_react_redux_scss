import {IData_SnippetNews} from '@/app/newsAPI.types.ts';

export const newsApi = {
    getNews(): Promise<IData_SnippetNews> {
        return new Promise((resolve) => {
            const data:IData_SnippetNews = {
                ID: 260855433,
                TI: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones",
                AB: "New research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by Kaspersky, nearly half (47%) of smartphone owners who use a banking app don’t protect their mobile device with antivirus or security software. More than half (52%) of UK smartphone owners who access bank accounts with their mobile device are worried about their banking app being hacked if their phone was lost or stolen. Despite that fear, 47%[2] are banking on devices without antivirus or security software installed, leaving their finances vulnerable to cyberattacks or fraud. Cybercriminals are constantly on the hunt to make money, and with £11,316,266 so far reported lost by 2,866 victims of coronavirus-related scams, these figures paint a worrying picture. Figures from 2019 show that 73% of the population uses mobile banking, accessing daily accounts as well as saving pots and house funds. However, while the majority of UK consumers protect their desktop or laptop from cyberattacks, nearly one third (31%) have never thought about protecting their phone with antivirus protection. Surprisingly, one fifth (21%) of adults overall, and one third (33%) of Generation Z, believe their phone can’t be hacked, despite the level of mobile malware attacks rising over the past 12 months. Around two-in-five of those without antivirus and security software on their smartphone believe they are taking appropriate precautions to prevent being hacked, by either never clicking on links from a company they do not know (42%), always using secure Wi-Fi connections (41%) or not opening emails from an unknown sender (40%). The research reveals that, overall, UK consumers are taking extra care to protect their computers from cyberattacks, while leaving their mobile devices open to threats. Although 79% of laptop owners and 80% of desktop users have installed antivirus and security software on these devices, just 53% of smartphone and 57% of tablet owners have followed suit. This is despite the fact that consumers are far more attached to their smartphones: more than half (55%) of smartphone owners would be devastated if anything happened to their device, while 47% state they could not live without their phone. Smartphones are also used far more frequently, with 81% using them at least once a day, compared to only 33% of desktops. A cortisol stress test, performed with two smartphone users as part of this campaign, actually showed that the stress levels of both participants were higher when they didn’t have access to their phones – compared to days when they did. “Our phones have become an essential part of living our lives to the full. And yet, we seem to have forgotten about their vulnerabilities. Mobile devices contain a potentially devastating amount of information about us, which is fast becoming the most valuable commodity in the world,” comments Alexis Conran, Times Radio host and presenter of The Joy of Techs. “Consequently, the more we do on our mobile devices, the more we need to think about protecting them. Just like you wouldn’t leave a pot of gold unprotected, you shouldn’t leave your phone as such. While it may weigh less, your phone is just as valuable” he said. Notably, the study reveals that millennials are the generation most attached to their phones but are the least likely to protect them. Additionally, 69% of millennials would be devastated if anything happened to their phone, compared to 55% of consumers overall. A further 70% never turn off their phone. However, 38% of millennials have never even thought about protecting their mobile devices. “It’s almost second nature to think of installing antivirus software on a laptop or desktop people use for online banking, but this research shows that the same isn’t true of smartphones or tablets. With more than half of us choosing to use mobile banking, it’s important to ask: why aren’t consumers protecting these devices in the same way as they would their desktops or laptops? As mobile malware becomes more advanced, simply taking individual precautions to avoid being hacked is no longer enough. When protected with antivirus software, consumers can better defend their devices from potential attacks,” says David Emm, principal security researcher at Kaspersky. A mobile antivirus solution is vital to protect smartphone devices, data and banking apps from malware. Kaspersky offers Antivirus for Android mobile devices and Kaspersky Security Cloud & VPN for iOS. Find out more about mobile antivirus solutions.",
                URL: "https://www.globalsecuritymag.com/Mobile-bankers-left-vulnerable-47,20200819,101944.html",
                DP: "2025-03-06T21:00:00",
                DOM: "globalsecuritymag.com",
                SENT: "negative",
                LANG: "en",
                AU: [],
                FAV: "/favicons/e65d69dc71ab539384fcc63062efdd3d.png",
                KW: [
                    { value: "antivirus", count: 10 },
                    { value: "kaspersky", count: 5 },
                    { value: "new", count: 1 }
                ],
                HIGHLIGHTS: [
                    "…20 by <kw>Kaspersky</kw> <kw>New</kw> research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by <kw>Kaspersky</kw>…",
                    "…with <kw>antivirus</kw> or security software. More than half (52%) of UK smartphone owners who access bank accounts with their mobile device are worried about their banking app being hacked if their phone was lost or stolen. Despite that fear, 47%[2] are banking on devices without <kw>antivirus</kw>…",
                    "…hone with <kw>antivirus</kw> protection. Surprisingly, one fifth (21%) of adults overall, and one third (33%) of Generation Z, believe their phone can’t be hacked, despite the level of mobile malware attacks rising over the past 12 months. Around two-in-five of those without <kw>antivirus</kw> and s…"
                ],
                REACH: 2392,
                CNTR: "France",
                CNTR_CODE: "fr",
                TRAFFIC: [
                    { value: "India", count: 0.779 },
                    { value: "United States of America", count: 0.101 },
                    { value: "Mexico", count: 0.036 }
                ]
            };

            resolve(data);
        });
    }
};