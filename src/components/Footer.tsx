const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t bg-muted/30">
      <div className="container-padding">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Sahad Saleel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
