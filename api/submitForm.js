const php = `
<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    // Process the form data as needed
    // For example, you can save it to a database or send an email
?>
`;

export default (req, res) => {
  res.status(200).send(php);
};
