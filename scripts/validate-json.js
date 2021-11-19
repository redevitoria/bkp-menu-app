const Validator = require('jsonschema').Validator;
const v = new Validator();

const hamburgerMenuInstance = require('../menus/menu-hamburger.json')
const horizontalMenuInstance = require('../menus/menu-horizontal.json')

const hamburgerMenuSchema = {
  "$id": "http://example.com/example.json",
  "type": "object",
  "required": [
    "header",
    "menu",
    "footer"
  ],
  "properties": {
    "header": {
      "type": "object",
      "required": [
        "label",
        "page"
      ],
      "properties": {
        "label": { "type": "string" },
        "page": {
          "type": "object",
          "required": [
            "name",
            "slug"
          ],
          "properties": {
            "name": { "type": "string" },
            "slug": { "type": "string" }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    },
    "menu": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "anyOf": [
          {
            "type": "object",
            "required": [
              "label",
              "colors",
              "text",
              "page",
              "items"
            ],
            "properties": {
              "label": { "type": "string" },
              "colors": {
                "type": "object",
                "required": [
                  "light",
                  "dark"
                ],
                "properties": {
                  "light": { "type": "string" },
                  "dark": { "type": "string" }
                },
                "additionalProperties": false
              },
              "text": { "type": "string" },
              "page": {
                "type": "object",
                "required": [
                  "name",
                  "slug"
                ],
                "properties": {
                  "name": { "type": "string" },
                  "slug": { "type": "string" }
                },
                "additionalProperties": false
              },
              "items": {
                "type": "array",
                "additionalItems": false,
                "items": {
                  "anyOf": [
                    {
                      "type": "object",
                      "required": [
                        "label",
                        "items"
                      ],
                      "properties": {
                        "label": { "type": "string" },
                        "items": {
                          "type": "array",
                          "additionalItems": false,
                          "items": {
                            "anyOf": [
                              {
                                "type": "object",
                                "required": [
                                  "label",
                                  "link"
                                ],
                                "properties": {
                                  "label": { "type": "string" },
                                  "link": { "type": "string" }
                                },
                                "additionalProperties": false
                              }
                            ]
                          }
                        }
                      },
                      "additionalProperties": false
                    }
                  ]
                }
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "required": [
              "label",
              "colors",
              "text",
              "page"
            ],
            "properties": {
              "label": { "type": "string" },
              "colors": {
                "type": "object",
                "required": [
                  "light",
                  "dark"
                ],
                "properties": {
                  "light": { "type": "string" },
                  "dark": { "type": "string" }
                },
                "additionalProperties": false
              },
              "text": { "type": "string" },
              "page": {
                "type": "object",
                "required": [
                  "name",
                  "slug"
                ],
                "properties": {
                  "name": { "type": "string" },
                  "slug": { "type": "string" }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "required": [
              "label",
              "colors",
              "items"
            ],
            "properties": {
              "label": { "type": "string" },
              "colors": {
                "type": "object",
                "required": [
                  "light",
                  "dark"
                ],
                "properties": {
                  "light": { "type": "string" },
                  "dark": { "type": "string" }
                },
                "additionalProperties": false
              },
              "items": {
                "type": "array",
                "additionalItems": false,
                "items": {
                  "anyOf": [
                    {
                      "type": "object",
                      "required": [
                        "label",
                        "link"
                      ],
                      "properties": {
                        "label": { "type": "string" },
                        "link": { "type": "string" }
                      },
                      "additionalProperties": false
                    }
                  ]
                }
              }
            },
            "additionalProperties": false
          }
        ]
      }
    },
    "footer": {
      "type": "object",
      "required": [
        "label",
        "page"
      ],
      "properties": {
        "label": { "type": "string" },
        "page": {
          "type": "object",
          "required": [
            "name"
          ],
          "properties": {
            "name": { "type": "string" }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
// {
//   "id": "/HamburgerSchema",
//   "type": "object",
//   "properties": {
//     "header": {
//       "type": "object",
//       "properties": {
//         "label": { "type": "string" },
//         "page": {
//           "type": "object",
//           "properties": {
//             "name": { "type": "string" },
//             "slug": { "type": "string" }
//           }
//         }
//       }
//     },
//     "menu": {
//       "type": "array",
//       "items": {
//         "properties": {
//           "label": { "type": "string" },
//           "colors": {
//             "type": "object",
//             "properties": {
//               "*": { "type": "string" }
//             }
//           },
//           "text": { "type": "string" },
//           "page": {
//             "type": "object",
//             "properties": {
//               "name": { "type": "string" },
//               "slug": { "type": "string" }
//             }
//           },
//           "items": {
//             "properties": {
//               "label": { "type": "string" },
//               "items": {
//                 "type": "array",
//                 "items": {
//                   "label": { "type": "string" },
//                   "link": { "type": "string" },
//                   "page": {
//                     "type": "object",
//                     "properties": {
//                       "name": { "type": "string" },
//                       "slug": { "type": "stirng" }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     "footer": {
//       "type": "object",
//       "properties": {
//         "label": { "type": "string" },
//         "page": {
//           "type": "object",
//           "properties": {
//             "name": { "type": "string" }
//           }
//         }
//       }
//     }
//   },
//   "required": ["header", "menu", "footer"]
// }

const horizontalMenuSchema = {

}


// const res = v.validate(JSON.stringify(1), {type: "number"})
// const res = v.validate(JSON.stringify({ "name": "aaa" }), { type: "object", "properties": { "name": { "type": "string" } } })
const res = v.validate(hamburgerMenuInstance, hamburgerMenuSchema)


console.log(res)
console.log(res.valid)