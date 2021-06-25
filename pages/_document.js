import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="js/jquery-3.3.1.js"></script>
          <script src="js/bootstrap.js"></script>
          <script src="js/wow.js"></script>
          <script src="js/headline.js"></script>
          <script src="js/isotope.js"></script>
          <script src="js/lity.js"></script>
          <script src="js/owl.carousel.js"></script>
          <script src="js/jquery.countimator.js"></script>
          <script src="js/jquery.ripples.js"></script>
          <script src="js/jquery.validate.js"></script>
          <script src="js/jquery.form.js"></script>
          <script src="js/sweetalert.js"></script>
          <script src="js/whatsapp.js"></script>
          <script src="js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
