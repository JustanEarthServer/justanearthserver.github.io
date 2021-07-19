// JES Earth Site Config File
// This is a JavaScript file, and format used is JSON (https://www.tutorialspoint.com/json/json_quick_guide.htm)
// Stuff should be self-explanatory, each const <item> corresponds to a part of the webpage (HEADER is the top bar,
// for example)
// A text editor or IDE like Notepad++ is recommended for edits to this file. Regular Notepad will make life a pain.

// Some options have simple HTML strings (simple compared to the HTML code of the site itself),
// all you *should* need to know is that HTML uses the following syntax: <tag> whats inside the tag </tag>
// so for instance a paragraph would be <p> paragraph text </p>, big heading text would be <h1> heading here </h1>.

// Tags:
// p - paragraph
// h1, h2, h3, h4, h5, h6 - headings, bigger the number the smaller the text
// br - line break, doesn't need closing </br>
// ul - bulleted list
// for more tags just google html tags, millions of guides out there

// Bulleted lists: use following syntax:
// <ul>
//     <li>Bullet point 1</li>
//     <li>Bullet point 2</li>
//     <li>Bullet point 3</li>
//     <li>Bullet point 4</li>
//     <li>Bullet point 5</li>
// </ul>

// REMEMBER TO PUT COMMAS IN BETWEEN OBJECT PROPERTIES {key: value, key2: value2} AND ITEMS IN A LIST [stuff, stuff2]

// this config file is made in hopes of being sufficient for any future minor edits to the site such as
// adding/editing links, images, text, and such, so long as no changes to the site's styling and skeleton are done.

const TITLES = {
    "timeline": "Our Roadmap",
    "FAQ": "Frequently Asked Questions"
}

const HEADER = {
    "brandIcon": {
        "url": "../img/jes_earth.png"
    },
    "socialMedia": [
        {
            "icon": "discord",
            "url": "http://discord.jes.earth/"
        },
        {
            "icon": "reddit",
            "url": "https://www.reddit.com/r/justanearthserver/"
        },
        {
            "icon": "tiktok",
            "url": "https://tiktok.com/@justanearthserver"
        },
        {
            "icon": "instagram",
            "url": "https://www.instagram.com/justanearthserver/"
        },
        {
            "icon": "youtube",
            "url": "https://youtube.com/channel/UC_UnrcztzHIedur7wr7LULg"
        }
    ],
    "links": [
        {
            "text": "Map",
            "url": "http://map.jes.earth/"
        },
        {
            "text": "Rules",
            "url": "rules"
        },
        {
            "text": "Shop",
            "url": "https://jes.tebex.io/"
        },
        {
            "text": "Discord",
            "url": "https://discord.gg/jes"
        },
        {
            "text": "FAQ",
            "url": "#faq"
        },
    ]
}

const TOP = {
    "bigText": "Just an Earth Server",
    "smallText": "yes, that's it...",
    "javaButton": {
        "text": "IP: jes.earth",
        "ip": "jes.earth",
        "clickedText": "Copied!"
    },
    "bedrockButton": {
        "text": "",
        "ip": "jes.earth",
        "clickedText": ""
    },
    "backgroundURL": "https://cdn.discordapp.com/splashes/767803717549948940/a5d734981dbe1488c6d93d4e59646dd4.jpg?size=2048"
}

// WARNING: Bulleted lists with the image on the right might render funky, I suggest keeping image to the left if
// making a bulleted list, OR adding the `dir="rtl"` attribute to the <ul> element (so, <ul dir="rtl">)

const IMAGE_TILES = [
    {
        "imagePosition": "left",
        "imageURL": "https://cdn.discordapp.com/attachments/866405526543400970/866410306812379136/Capture_decran_2021-07-18_a_22.04.53.png",
        "html": `
        <h2>Yes, that's it -</h2>
        <p>Just an Earth Server is a Minecraft network for Java and Bedrock players. We have multiple servers such as:</p>
        <ul>
            <li>1:500 Peaceful Earth Scale Minecraft Server. Great to build and find new friends!</li>
            <li>1:500 Earth Scale Minecraft Server with wars. Great for experienced Minecraft players and strategists!</li>
            <li>OneBlock server, similar to Skyblock servers!</li>
            <li>And many more coming soon!</li>
        </ul>
        `,
        "objectFit": "scale-down",  // what to use to make the image fit. https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
        // ^^^ supported options are fill, contain, cover, none, or scale-down.
        "imageAlt": ""  // description of the image that on some devices shows when hovering mouse over
    },/*
    {
        "imagePosition": "right",
        "imageURL": "https://scx2.b-cdn.net/gfx/news/hires/2019/2-forest.jpg",
        "html": `
        <h2>something something</h2>
        <p>something something</p>
        <ul dir="rtl">
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
        </ul>
        `,
        "object-fit": "cover"
    },*/
    {
        "imagePosition": "left",
        "imageURL": "/img/jes_earth_tile.png",
        "html": `
        <h2>Why our server?</h2>
        <p>We are trying our best to provide a quality server:</p>
        <ul>
            <li>Our servers have been running for over a year.</li>
            <li>The network is hosted on powerful servers. Enjoy a "no-lag" experience!</li>
            <li>Our community is known to be toxicity free.</li>
            <li>We make polls to satisfy our community needs!</li>
        </ul>
        `,
        "objectFit": "cover",  // what to use to make the image fit. https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
        // ^^^ supported options are fill, contain, cover, none, or scale-down.
        "imageAlt": ""  // description of the image that on some devices shows when hovering mouse over
    },
]

const JOIN_INSTRUCTIONS = [
    {
        "imageURL": "https://images-ext-1.discordapp.net/external/nx3sT7vyaQ1uGkr_iBoCgsReGV5cBuIgH3rrdjgUBIE/https/lh3.googleusercontent.com/EV8iaFpeMu3riNQfmsf83XW2T0QZIM01GX-vS0SkGY6PAC4FtWNsLlevM7e5mZVaNNjJLrKCSNTvNR7Iz5FmT5w%3Ds400",
        "imageAlt": "",
        "content": `<h2>Bedrock, Java and Pocket Edition</h2>
                    <ul>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                    </ul>`
    },
    {
        "imageURL": "/img/Playstation.png",
        "imageAlt": "",
        "content": `<h2>PlayStation 4 and 5</h2>
                    <ul>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                    </ul>`
    },
    {
        "imageURL": "https://images-ext-1.discordapp.net/external/y1R_GvAA9Zrr8y-TC3BoctQ7l3812Q0boAZI9GR6huk/http/pngimg.com/uploads/xbox/xbox_PNG17528.png?width=1346&height=1331",
        "imageAlt": "",
        "content": `<h2>Xbox</h2>
                    <ul>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                    </ul>`
    },
    {
        "imageURL": "https://images-ext-1.discordapp.net/external/VAyCMWSF6CzvcNL_y1uOcP0vCrB5ZvjbuZ4RxKi5_7k/https/seeklogo.com/images/N/nintendo-switch-logo-38D4F5C7E7-seeklogo.com.png",
        "imageAlt": "",
        "content": `<h2>Nintendo Switch</h2>
                    <ul>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                    </ul>`
    }
]

const TIMELINE_STYLE = {
    "lineColor": "#727cf5",
    "backgroundColor": "rgba(114, 124, 245, 0.09)"
}

const TIMELINE = [
    {
        "date": "Summer 2021",
        "content": `<h3>Something</h3>
                        <p>Something description</p>`
    },
    {
        "date": "Fall 2021",
        "content": `<h3>Something</h3>
                        <p>Something description</p>`
    },
    {
        "date": "Winter 2021",
        "content": `<h3>Something</h3>
                        <p>Something description</p>`
    },
    {
        "date": "Spring 2022",
        "content": `<h3>Something</h3>
                        <p>Something description</p>`
    },
];

const FAQ = [
    {
        "question": "Q: How do I join a server from the lobby?",
        "answer": "A: Just enter one of the many portals – yes, that's it..."
    },
    {
        "question": "Q: Can I join the server using Bedrock or MCPE ?",
        "answer": "A: Yes, any Minecraft platform can join."
    },
    {
        "question": "Q: Can I join with a \"cracked\" account?",
        "answer": "A: No, only paid accounts can join our network."
    },
    {
        "question": "Q: What is the server version?",
        "answer": "A: You can join using 1.16.5 or newer (up to 1.17.1)."
    },
    {
        "question": "Q: I purchased a rank, how do I get it on Discord?",
        "answer": "A: Do /link in the lobby, and send it to the main bot."
    },
    {
        "question": "Q: I've caught someone breaking the rules, where can I report him? ",
        "answer": `A: Join our support Discord and open a ticket : <a class="onhover-underline" href="https://discord.gg/8XvMCQuD26">https://discord.gg/8XvMCQuD26</a>.`
    },
];

const SOCIAL_MEDIA_FOOTER = [
    {
        "icon": "discord",
        "url": "http://discord.jes.earth/"
    },
    {
        "icon": "reddit",
        "url": "https://www.reddit.com/r/justanearthserver/"
    },
    {
        "icon": "tiktok",
        "url": "https://tiktok.com/@justanearthserver"
    },
    {
        "icon": "instagram",
        "url": "https://www.instagram.com/justanearthserver/"
    },
    {
        "icon": "youtube",
        "url": "https://youtube.com/channel/UC_UnrcztzHIedur7wr7LULg"
    }
]
