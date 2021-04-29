const models = require('./models');
const Sequelize = require('sequelize');
const { Op, literal } = require('sequelize');
const { generateQuestion, getQuestion, generateFirst } = require('./utils')
const fs = require('fs');
// const generateQuestion = requ
// models.Avatar.create(
//     {
//         imgSrc: "asdfjhgadfjkng"
//     }
// )
// const allImages = [];
// const imageData = fs.readdirSync('./avatars');
// imageData.length
// for (image of imageData) {
//     allImages.push(fs.readFileSync(`./avatars/${image}`))
// }

// fixedImagesArray = allImages.map(image => {
//     return {
//         img_src: image,
//         created_at: new Date(),
//         updated_at: new Date()
//     }
// })
// for (image of fixedImagesArray) {
//     models.Avatar.create(
//         image
//     );
// }

// console.log(allImages);
        // models.Player.create({
//     name: "KingCas",
//     score: 0,
//     avatarId: 1
// })

// models.Player.create({
//     name: "VakninInvestments",
//     score: 0,
//     avatarId: 2
// })





// async function bla() {

//     const Dplayer = await models.Player.findOne({
//         where: {
//             id: 1
//         }
//     });


//     // const DsavedQuestion = await models.Player.findOne({
//     //     where:
//     //     {
//     //         id: 2
//     //     },
//     //     include: models.SavedQuestion
//     // })
//     // console.log(DsavedQuestion.toJSON());

//     await Dplayer.addSavedQuestion(1, {
//         through: { rank: 3, isPassed: true }
//     });

//     //     const mashu = await Dplayer.getSavedQuestions({ through: ["QuestionAskedPerPlayer"] })
//     //     console.log(mashu[0].QuestionAskedPerPlayer.toJSON());
// }
// bla()
// SavedQuestion.findAll({
//     group: ['finalRank'],
//     include: models.QuestionStats
// })

// generateQuestion(124).then(console.log)