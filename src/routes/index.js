const express = require("express");


const routes = express.Router();


//  Controller 
const AtendimentoController = require("../controllers/atendimento");
const PacienteController = require("../controllers/paciente");
const PsicologosController = require("../controllers/psicologo");
const AuthController = require("../controllers/authController");
const DashboardController = require("../controllers/dashboard");


//  validators
const authAtendimentoValidator = require("../validators/auth/atendimento");
const authPsicologoValidator = require("../validators/auth/psicologo");
const authPacienteValidator = require("../validators/auth/paciente");
const authLoginValidator = require("../validators/auth/login");

// Rotas de Atendimento

routes.get("/atendimento", AtendimentoController.index);
routes.post("/atendimento", authAtendimentoValidator, AtendimentoController.cadastro);
routes.get("/atendimento/:id", AtendimentoController.show);


// Rotas do paciente

routes.get("/paciente", PacienteController.index);
routes.post("/paciente", authPacienteValidator, PacienteController.store);
routes.get("/paciente/:id", PacienteController.show);
routes.put("/paciente/:id", authPacienteValidator, PacienteController.update);
routes.delete("/paciente/:id", PacienteController.destroy);

// Rotas de psicologo

routes.get("/psicologo", PsicologosController.index);
routes.post("/psicologo", authPsicologoValidator, PsicologosController.store);
routes.get("/psicologo/:id", PsicologosController.show);
routes.put("/psicologo/:id", authPsicologoValidator, PsicologosController.update);
routes.delete("/psicologo/:id", PsicologosController.destroy);


//Rota de login
routes.post("/login", authLoginValidator, AuthController.login);


//Rota do dashboards
routes.get("/dashboard/pacientes", DashboardController.pacientes);
routes.get("/dashboard/atendimentos", DashboardController.atendimentos);
routes.get("/dashboard/psicologos", DashboardController.psicologos);
routes.get("/dashboard/media", DashboardController.media);


module.exports = routes;
