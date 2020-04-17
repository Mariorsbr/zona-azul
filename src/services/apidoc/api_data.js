define({ "api": [
  {
    "type": "post",
    "url": "/user/edit",
    "title": "Edita um usuário",
    "name": "EditUser",
    "group": "User",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha antiga, restrição para alterar os dados.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Nome completo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email único do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birthday",
            "description": "<p>Data de nascimento no formato DD-MM-YYYY.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Telefone do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "newPassword",
            "description": "<p>Nova senha contendo de 4 a 20 caracteres.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Json Web Token para autenticação.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Resultado da operação.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Informações referentes ao resultado da operação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"message\": \"Usuário atualizado com sucesso.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnprocessableEntity",
            "description": "<p>A atualização não pode ser processada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 422 Unprocessable Entity\n{\n    \"success\": false,\n    \"message\": \"Usuário não pode ser atualizado.\",\n    \"errors\": [\n        \"Email inválido\",\n        \"Senha deve conter 4 a 20 caracteres\",\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "doc/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/forgotPassword",
    "title": "Solicita redefinição de senha para um usuário",
    "name": "ForgotPasswordUser",
    "group": "User",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf_cnpj",
            "description": "<p>CPF ou CNPJ do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Resultado da operação.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Informações referentes ao resultado da operação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"message\": \"Um email foi enviado para rodrigo_blz1@hotmail.com com instruções adicionais.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>A requisição não pode ser processada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 Bad Request\n{\n    \"success\": false,\n    \"message\": \"Falha na solicitação\",\n    \"errors\": [\n        \"Usuário não cadastrado\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login de um usuário",
    "name": "LoginUser",
    "group": "User",
    "version": "0.0.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf_cnpj",
            "description": "<p>CPF ou CNPJ (apenas números) do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Resultado da operação.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Informações referentes ao resultado da operação.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Objeto contento informações do usuário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Login realizado com sucesso.\",\n    \"user\": {\n        \"name\": \"Rod\",\n        \"cpf_cnpj\": \"81074868625\",\n        \"email\": \"rod@gmail.com\",\n        \"birthday\": \"06-05-1994\",\n        \"phone\": \"85999999999\",\n        \"total_cads\": 6,\n        \"token\": \"JWT eyJ...\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>CPF/CNPJ ou senha incorretos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": \"O CPF/CNPJ ou a senha não estão corretos.\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "doc/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Registro de um usuário",
    "name": "RegisterUser",
    "group": "User",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome completo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha contendo de 4 a 20 caracteres.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email único do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf_cnpj",
            "description": "<p>CPF ou CNPJ único e válido.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birthday",
            "description": "<p>Data de nascimento no formato DD-MM-YYYY (Opcional para CNPJ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Telefone do usuário no formato 85912345678.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Resultado da operação.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Informações referentes ao resultado da operação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"message\": \"Usuário cadastrado com sucesso.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnprocessableEntity",
            "description": "<p>O cadastro não pode ser processado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 422 Unprocessable Entity\n{\n    \"success\": false,\n    \"message\": \"Usuário não pode ser cadastrado.\",\n    \"errors\": [\n        \"Data de nascimento inválida\",\n        \"CPF ou CNPJ inválido\",\n        \"Email inválido\",\n        \"Senha muito grande\",\n        \"Nome não informado\"\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "doc/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/deleteVehicle",
    "title": "Deleta um veículo e desvincula do usuário",
    "name": "DeleteVehicle",
    "group": "Vehicle",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licensePlate",
            "description": "<p>Placa do veículo a ser deletado e desvinculado</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Json Web Token para autenticação.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Resultado da operação.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Informações referentes ao resultado da operação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n     \"success\": true,\n     \"message\": \"Veículo deletado com sucesso.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>A deleção não pode ser processada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n   {\n     \"success\": false,\n     \"message\": \"Veículo não pode ser deletado.\",\n     \"errors\": [\n         \"Veículo não vinculado ao usuário\"\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "doc/vehicle.doc.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "get",
    "url": "/getVehicles",
    "title": "Recupera os veículos vinculados ao usuário",
    "name": "GetVehicles",
    "group": "Vehicle",
    "version": "0.0.2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Json Web Token para autenticação.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Resultado da operação.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Informações referentes ao resultado da operação.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "vehicles",
            "description": "<p>Lista contendo veículos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   “success”: true,\n   “message”: “Veículos recuperados com sucesso”,\n   “vehicles”: [\n       {\n           “licensePlate”: “AAA6668\",\n           “type”: 0,\n           “isParked”: false\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Não autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "filename": "doc/vehicle.doc.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "post",
    "url": "/registerVehicle",
    "title": "Registra um veículo e vincula ao usuário",
    "name": "RegisterVehicle",
    "group": "Vehicle",
    "version": "0.0.2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Json Web Token para autenticação.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licensePlate",
            "description": "<p>Placa do veículo a ser registrada e vinculada</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Número representando tipo do veículo { 1: 'CAR', 2: 'BUS / TRUCK' }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Resultado da operação.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Informações referentes ao resultado da operação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n     \"success\": true,\n     \"message\": \"Veículo cadastrado e vinculado ao usuário.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnprocessableEntity",
            "description": "<p>O registro não pode ser processado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n   {\n     \"success\": false,\n     \"message\": \"Veículo não pode ser cadastrado.\",\n     \"errors\": [\n         \"Dados informados inválidos.'\"\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "doc/vehicle.doc.js",
    "groupTitle": "Vehicle"
  }
] });
