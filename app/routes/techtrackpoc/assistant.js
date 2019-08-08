//const { logger, config } = require('../../core')
const calendar = require('../../utils/calendar')
const sndrsp = require("../../utils/sendResponse")
const getWeather = require('../../utils/weather')
const Product = require('../../utils/Product')

async function getHandler(req, res, next) {
        // await calendar.upcomingEvents(req, res, next);
        // res.sendStatus(200);
        res.status(200).send("Hello World")    
}

async function postHandler(req, res, next) {
        console.log('request: ', req.body);

        parameters = req.body.parameters;
        action = req.body.action;

        if(action === "productname") {
          if(parameters.productname === "iphone") {
            // what is the model you look for? provide the models
            responseJson = {
              "fulfillmentText" : "what is the model you look for?",
              "fulfillmentMessages": [{
                "platform": "ACTIONS_ON_GOOGLE",
                "simpleResponses": {
                    "simpleResponses": [{
                        "textToSpeech": "what is the model you look for?"
                    }]
                }
            },
                {
                  "platform": "ACTIONS_ON_GOOGLE",
                  "basicCard": {
                    "title": "product model",
                    "subtitle": "",
                    "formattedText": "models ",
                      "image" : {
                              "imageUri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBphbuPuMDxxLL2seMJV30kbcMHcZLVKsufOsOIzkZgZRRJAb9",
                              "accessibilityText": "Sunny"
                              
                      },
                    
                    "buttons": [
                      {
                        "title": "button text",
                        "openUriAction": {
                              "uri" : "https://google.com/"
                         }
                      }
                    ],
                    // "imageDisplayOptions": "WHITE"
                  }
                }
              ],
              "outputContexts": [
                {
                  "name": req.body.session + "/contexts/product_model",
                  "lifespanCount": 1,
                  "parameters": {
                    "productname": "iphone",
                    "models" : ["iphone X", "iphone 8s"],
                    // "product" : "sunscreen"
                  }
                }
              ]
              // "followupEventInput": {
              //   "name": "product_input",
              //   "languageCode": "en-US",
              //   "parameters": {
              //     "location": "param value"
              //   }
              // }
            }
// }
res.status(200).send(responseJson);


          }
          else if (parameters.productname === "samsung") {

          }
        }
        else {
        // if("product" === req.body.queryResult.action) {
                responseJson = {
                        "fulfillmentText" : "This is sample text",
                        "fulfillmentMessages": [{
                          "platform": "ACTIONS_ON_GOOGLE",
                          "simpleResponses": {
                              "simpleResponses": [{
                                  "textToSpeech": "Hi! How are you doing?"
                              }]
                          }
                      },
                          {
                            "platform": "ACTIONS_ON_GOOGLE",
                            "basicCard": {
                              "title": "Weather",
                              "subtitle": "",
                              "formattedText": "Sunny Condition",
                                "image" : {
                                        "imageUri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBphbuPuMDxxLL2seMJV30kbcMHcZLVKsufOsOIzkZgZRRJAb9",
                                        "accessibilityText": "Sunny"
                                        
                                },
                              
                              "buttons": [
                                {
                                  "title": "button text",
                                  "openUriAction": {
                                        "uri" : "https://google.com/"
                                   }
                                }
                              ],
                              // "imageDisplayOptions": "WHITE"
                            }
                          }
                        ],
                        "outputContexts": [
                          {
                            "name": req.body.session + "/contexts/product_input",
                            "lifespanCount": 1,
                            "parameters": {
                              "location": "florida",
                              "date" : "10th May",
                              "product" : "sunscreen"
                            }
                          }
                        ]
                        // "followupEventInput": {
                        //   "name": "product_input",
                        //   "languageCode": "en-US",
                        //   "parameters": {
                        //     "location": "param value"
                        //   }
                        // }
                      }
        // }
        res.status(200).send(responseJson);
                    }
        // await calendar.upcomingEvents(req, res, next);
        
        // action = req.body.action
        // parameters = req.body.parameters 

        // if(action === 'Product') {
        //         return calendar.getCalendarEvents(req, res, next)
        // }
        // if(action === 'Recommendations') {
        //         return Product.getRecommendations(req, res, next)
        // }
        // else {
        //         let responseJson = {
        //                 speech: localeService.translate('I didn\'t get that. Can you say it again?'),
        //                 outputContexts: [{ 'name': 'start_login', 'lifespan': 1, 'parameters': {} }],
        //                 session: req.body.session
        //                 };
        //               return res.json(sndrsp.sendResponse( responseJson ));
        // }

        // res.status(200).send('hello World!!! Post Request')
}


module.exports = { 
	getHandler,
	postHandler
}

