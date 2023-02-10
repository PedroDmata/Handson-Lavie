const { Atendimento, Paciente, Psicologo } = require("../models/");
const AtendimentoController = {
  index: async (req, res) => {
    const listaDeAtendimentos = await Atendimento.findAll({
      include: [Paciente, {
        model: Psicologo, 
        attributes: { exclude: ['senha'] }}]
    });
    res.json(listaDeAtendimentos);
  },

  async cadastro (req, res)   {
    console.log(req.auth);
    
    const {id, data_atendimento, observacao, paciente_id } =
      req.body;
         
         const id_Usuario = req.auth.id;


    try {
      const novoAtendimento = await Atendimento.create({
        
        data_atendimento,
        observacao,
        psicologo_id: id_Usuario,
        paciente_id,
      });

      res.status(201).json(novoAtendimento);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: " erro, tente novamente mais tarde." });
    }
  },

  show: async (req, res) => {
    const { id } = req.params;

    const atendimento = await Atendimento.findByPk(id, {
      include: [Paciente, {
        model: Psicologo, 
        attributes: { exclude: ['senha'] }}]
    });

    if (atendimento) {
      return res.json(atendimento);
    }

    res.status(404).json({
      message: "Id não encontrado",
    });
  },

};

module.exports = AtendimentoController;
