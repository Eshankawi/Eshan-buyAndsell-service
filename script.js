/* Resetting margin and padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* General Body Styles */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

/* Header Styles */
header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

header .logo h1 {
    margin: 0;
}

header nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 10px 0;
}

header nav ul li {
    margin: 0 15px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* Section Styles */
.section {
    padding: 40px;
    text-align: center;
}

#home {
    background-color: #f4f4f4;
}

#buy, #sell, #signup, #login {
    background-color: #fff;
    border: 1px solid #ccc;
    margin: 20px 0;
}

/* Form Styles */
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

form input,
form textarea {
    margin: 10px;
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form button {
    padding: 10px 20px;
    margin-top: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

form button:hover {
    background-color: #555;
}

/* Button and Link Styles */
button {
    cursor: pointer;
}

a {
    color: #333;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* Footer Styles */
footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}
