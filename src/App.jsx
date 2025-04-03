import { useEffect, useState } from "react"
import { initReveal } from "./app/reveal/reveal"

const App = () => {
    const [reveal, setReveal] = useState()

    useEffect(() => {
        if (!reveal) setReveal(initReveal())
    }, [])

    return (
        <div className="reveal">
            <div className="slides">
                <section>
                    <h1>Beautiful presentations</h1>
                    <h2>New features</h2>
                    <ul>
                        <li>Nerd icons </li>
                        <li>
                            <code className="js">{`
                                (inline) => code("highlighting")
                            `}</code>
                        </li>
                        <li>Automatic QR Code generation</li>
                        <li>and much more!</li>
                    </ul>
                </section>
                <section>
                    <h1>CUSTOM TOKYONIGHT THEME</h1>
                    <h2 className="fragment">THAT HAS</h2>
                    <h3 className="fragment">MULTI</h3>
                    <h4 className="fragment">LEVEL</h4>
                    <h5 className="fragment">HEADING</h5>
                    <h6 className="fragment">COLORS</h6>
                    <h6>
                        Thanks to this project
                        <a href="https://github.com/tcmmichaelb139/obsidian-tokyonight">
                            
                        </a>
                        for the colorscheme!
                    </h6>
                </section>
                <section>
                    <section>
                        <h1>Tailwind CSS</h1>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h5>Lorem, ipsum.</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Error quod fugiat harum
                                    modi laboriosam dignissimos, maxime
                                    possimus? Error, nihil in.
                                </p>
                            </div>
                            <div>
                                <h5>Lorem, ipsum.</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Error quod fugiat harum
                                    modi laboriosam dignissimos, maxime
                                    possimus? Error, nihil in.
                                </p>
                            </div>
                            <div className="col-span-2">
                                <h5>Lorem, ipsum.</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Error quod fugiat harum
                                    modi laboriosam dignissimos, maxime
                                    possimus? Error, nihil in.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1>Custom classes</h1>
                        <div className="grid grid-cols-3 gap-8">
                            <div className="border-r">
                                <h5>border-r</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Illum, soluta!
                                </p>
                            </div>
                            <div className="border-o">
                                <h5>border-o</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Illum, soluta!
                                </p>
                            </div>
                            <div className="border-y">
                                <h5>border-y</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Illum, soluta!
                                </p>
                            </div>
                        </div>
                    </section>
                </section>
                <section>
                    <section data-auto-animate>
                        <h1>New code highlighting!</h1>
                        <div>
                            Now also has Tokyo Night
                            <code>highlight.js</code>
                            highlighting implementation
                        </div>
                        <pre>
                            <code data-trim data-noescape>{`
var foo = {
    bar: function () {
             alert("Hello, World!");
         }
};	
					    `}</code>
                        </pre>
                    </section>
                    <section data-auto-animate>
                        <h1>New code highlighting!</h1>
                        <h5>Inline code highlighting is now also supported!</h5>
                        <p>
                            Just wrap your code with
                            <code>&lt;code&gt;</code>
                            tag and get highlighting like this
                            <code className="js">
                                {`const foo = () => {return bar}`}
                            </code>
                            !
                        </p>
                    </section>
                </section>
                <section>
                    <h1>Mermaid for beautiful diagrams!</h1>
                    <div className="mermaid">
                        <pre>{`
						erDiagram
    CUSTOMER ||--o{ ORDER : ""
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }
    ORDER ||--|{ STUDENT : contains
    STUDENT {
        int orderNumber
        string deliveryAddress
    }
						`}</pre>
                    </div>
                    <h4>
                        Check documentation
                        <a href="https://mermaid.js.org/config/usage.html">
                            here
                        </a>
                        !
                    </h4>
                </section>
                <section>
                    <h1>Now supports Nerd font icons!</h1>
                    <div>Nerdy project that adds icons to font itself</div>
                    <h6>
                        Checkout their site for icons like this
                        <a href="https://www.nerdfonts.com/">󰖟</a>!
                    </h6>
                </section>
                <section>
                    <h1>Now supports automatic QRCode generation!</h1>
                    <div>
                        With GoQR you can just add data-type and alt attributes
                        to your
                        <code className="html">
                            &lt;img src="https://goqr.me/" data-type="qrcode" /
                            &gt;
                        </code>
                        tag!
                    </div>
                    <img
                        className="r-stretch"
                        src="https://goqr.me/"
                        data-type="qrcode"
                    />
                </section>
                <section>
                    <h1>New changes on the way!</h1>
                </section>
            </div>
        </div>
    )
}

export default App
