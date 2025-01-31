const signUpCodeTemplate = (fullName, loginCode) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Udemy Login Code</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f7f9fa;
        margin: 0;
        padding: 20px;
        color: #1c1d1f;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
      .logo {
        text-align: left;
        margin-bottom: 20px;
      }
      .logo img {
        max-height: 40px;
      }
      .content {
        text-align: center;
        font-size: 16px;
        text-align: left;
      }
      .code {
        font-size: 24px;
        font-weight: bold;
        background-color: #d3d3d352;
        padding: 10px;
        display: inline-block;
        margin: 20px 0;
        border-radius: 4px;
        text-align: center;
        font-weight: 800;
        width: -webkit-fill-available;
      }
      .footer {
        font-size: 12px;
        text-align: center;
        color: #6a6f73;
        margin-top: 20px;
        text-align: left;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Udemy Logo -->
      <div class="logo">
        <img src="https://s.udemycdn.com/email/logo-udemy-v3.png" alt="Udemy" />
      </div>
      <hr />
      <!-- Email Content -->
      <div class="content">
        <p>Hi ${fullName},</p>
        <p>Use the code below to finish your sign up.</p>

        <!-- Code Block -->
        <div class="code">${loginCode}</div>

        <p>This code expires in 15 minutes.</p>
        <p>
          Didn't request this code?
          <a href="https://www.udemy.com/support/" style="color: #5624d0"
            >contact us</a
          >.
        </p>
      </div>

      <!-- Footer -->
      <div class="footer">
        Delivered by Udemy 600 Harrison Street, 3rd Floor, San Francisco, CA
        94107
      </div>
    </div>
  </body>
</html>
`;
};

module.exports = signUpCodeTemplate;
