import './Footer.css'

function Footer(){
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Project created by <a href="https://alura.com.br" target="_blank">Alura</a>
                
            </p>
            <p>
                and developed by <a href="https://github.com/dyhueda" target="_blank">Diego Ueda</a>
            </p>
        </section>
    </footer>)
}

export default Footer
