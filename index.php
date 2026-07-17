<?php
$baseUrl = "https://shital620.github.io/my-react-portfolio/";
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shital Kumari Portfolio</title>
    <meta name="description" content="Portfolio website of Shital Kumari, React Native Developer." />
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #0b1020;
        color: #f5f7ff;
        display: grid;
        place-items: center;
        min-height: 100vh;
      }
      .card {
        text-align: center;
        padding: 2rem;
        border-radius: 16px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        max-width: 640px;
      }
      a {
        color: #70d7ff;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Shital Kumari Portfolio</h1>
      <p>This PHP page redirects to the React portfolio.</p>
      <p><a href="<?php echo $baseUrl; ?>">Open Portfolio</a></p>
    </div>
  </body>
</html>
