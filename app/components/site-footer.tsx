import { contactEmail, instagram, location, whatsappLinks } from "../contact";

export function SiteFooter() {
  return (
    <footer>
      <a className="identity" href="/"><span className="identity-name">Breno Luiz</span><span className="identity-role">software &amp; sistemas</span></a>
      <p className="footer-contact">
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        <a href={whatsappLinks.navigation} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href={instagram.url} target="_blank" rel="noreferrer">Instagram</a>
      </p>
      <span>{location} · 2026</span>
    </footer>
  );
}
