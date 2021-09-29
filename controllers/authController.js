const bcryptjs = require("bcryptjs");
const saltRounds = 10;

const User = require("./../models/User.model");
exports.loginUser=async(req,res)=>{
  res.render("auth/login")
}
exports.loginUserForm = async (req, res) => {
  // 1. OBTENER LAS DATOS DEL FORMULARIO
  const { username, password } = req.body;

  // 2. REALIZAR UNA VALIDACIÓN DE QUE NO HAYA DATOS VACÍOS
  if (username === "" || password === "") {
    return res.render("index", {
      errorMessage: "You have empty fields.You must fill them out.",
    });
  }

  // 3. SI TODO BIEN, ENTONCES.... BUSQUEMOS AL USUARIO EN BASE DE DATOS

  try {
    const foundUser = await User.findOne({ username });

    // SI EL USUARIO NO EXISTE..., ES MANDAR UN MENSAJE DE ERROR AL USUARIO
    if (!foundUser) {
      return res.render("index", {
        errorMessage:
          "Incorrect username, please try again",
      });
    }

    // 4. SI ES ENCONTRADO, ENTONCES... COMPARACIÓN DE CONTRASEÑA DE FORMULARIO VS LA CONTRASEÑA DE BASE DE DATOS
    const isItMatched = await bcryptjs.compareSync(
      password,
      foundUser.passwordHash
    );

    // SI LA CONTRASEÑA NO COINCIDE...
    if (isItMatched === false) {
      return res.render("index", {
        errorMessage:
          "Username or password incorrect.Please try again.",
      });
    }

    // 5. SI LA CONTRASEÑA COINCIDE, ENTONCES... CREAR UNA SESIÓN Y RETORNAR PÁGINA DE ÉXITO

    // console.log(req)
    //req.session.currentUser = foundUser;

    return res.redirect("/profile/home");
  } catch (error) {
    // 6. EN CASO DE FALLOS, REALIZAMOS MANEJO DE ERRORES (ERROR HANDLING)
    console.log(error);
  }
};
exports.signUpUser = async (req, res) => {
  console.log("[signUpUser]");
  res.render("auth/signup");
};
exports.createUserForm = async (req, res) => {
  // 1. OBTENER LOS DATOS DEL FORMULARIO
  const { username, email, password } = req.body;

  // 2. ENCRIPTACIÓN DE LA VARIABLE PASSWORD

  // ESTE ES LA BASE DE LA ENCRIPTACION
  // $2a$10$H9jg8k0zOgo8346atEKSwu
  const salt = await bcryptjs.genSalt(saltRounds);

  // MEZCLA DEL PASSWORD CON NUESTRA SALT
  // ESTE PASSWORD NO PUEDE SER REVERSIBLE
  const hashedPassword = await bcryptjs.hash(password, salt);

  // 3. INSERTAR EL USUARIO, CON SU PASSWORD ENCRIPTADO, EN BASE DE DATOS

  const newUser = await User.create({
    username,
    email,
    passwordHash: hashedPassword,
  });

  console.log(newUser);

  // 4. RETORNAR UNA PÁGINA O UNA REDIRECCIÓN PARA QUE EL USUARIO SEPA QUE LO HIZO BIEN

  res.redirect("/profile/home");
};

