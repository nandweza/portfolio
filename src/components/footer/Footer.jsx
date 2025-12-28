import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark py-3 mt-auto">
            <p>&copy; {currentYear} Allan Kindarara</p>
        </footer>
    )
}

export default Footer;