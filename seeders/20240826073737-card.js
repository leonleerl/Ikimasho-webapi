"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cards = [
      {
        name_hiragana: "あ",
        name_katakana: "ア",
        name_romaji: "a",
        audio_play: "/audio/a.mp3",
      },
      {
        name_hiragana: "い",
        name_katakana: "イ",
        name_romaji: "i",
        audio_play: "/audio/i.mp3",
      },
      {
        name_hiragana: "う",
        name_katakana: "ウ",
        name_romaji: "u",
        audio_play: "/audio/u.mp3",
      },
      {
        name_hiragana: "え",
        name_katakana: "エ",
        name_romaji: "e",
        audio_play: "/audio/e.mp3",
      },
      {
        name_hiragana: "お",
        name_katakana: "オ",
        name_romaji: "o",
        audio_play: "/audio/o.mp3",
      },
      {
        name_hiragana: "か",
        name_katakana: "カ",
        name_romaji: "ka",
        audio_play: "/audio/ka.mp3",
      },
      {
        name_hiragana: "き",
        name_katakana: "キ",
        name_romaji: "ki",
        audio_play: "/audio/ki.mp3",
      },
      {
        name_hiragana: "く",
        name_katakana: "ク",
        name_romaji: "ku",
        audio_play: "/audio/ku.mp3",
      },
      {
        name_hiragana: "け",
        name_katakana: "ケ",
        name_romaji: "ke",
        audio_play: "/audio/ke.mp3",
      },
      {
        name_hiragana: "こ",
        name_katakana: "コ",
        name_romaji: "ko",
        audio_play: "/audio/ko.mp3",
      },
      {
        name_hiragana: "さ",
        name_katakana: "サ",
        name_romaji: "sa",
        audio_play: "/audio/sa.mp3",
      },
      {
        name_hiragana: "し",
        name_katakana: "シ",
        name_romaji: "shi",
        audio_play: "/audio/shi.mp3",
      },
      {
        name_hiragana: "す",
        name_katakana: "ス",
        name_romaji: "su",
        audio_play: "/audio/su.mp3",
      },
      {
        name_hiragana: "せ",
        name_katakana: "セ",
        name_romaji: "se",
        audio_play: "/audio/se.mp3",
      },
      {
        name_hiragana: "そ",
        name_katakana: "ソ",
        name_romaji: "so",
        audio_play: "/audio/so.mp3",
      },
      {
        name_hiragana: "た",
        name_katakana: "タ",
        name_romaji: "ta",
        audio_play: "/audio/ta.mp3",
      },
      {
        name_hiragana: "ち",
        name_katakana: "チ",
        name_romaji: "chi",
        audio_play: "/audio/chi.mp3",
      },
      {
        name_hiragana: "つ",
        name_katakana: "ツ",
        name_romaji: "tsu",
        audio_play: "/audio/tsu.mp3",
      },
      {
        name_hiragana: "て",
        name_katakana: "テ",
        name_romaji: "te",
        audio_play: "/audio/te.mp3",
      },
      {
        name_hiragana: "と",
        name_katakana: "ト",
        name_romaji: "to",
        audio_play: "/audio/to.mp3",
      },
      {
        name_hiragana: "な",
        name_katakana: "ナ",
        name_romaji: "na",
        audio_play: "/audio/na.mp3",
      },
      {
        name_hiragana: "に",
        name_katakana: "ニ",
        name_romaji: "ni",
        audio_play: "/audio/ni.mp3",
      },
      {
        name_hiragana: "ぬ",
        name_katakana: "ヌ",
        name_romaji: "nu",
        audio_play: "/audio/nu.mp3",
      },
      {
        name_hiragana: "ね",
        name_katakana: "ネ",
        name_romaji: "ne",
        audio_play: "/audio/ne.mp3",
      },
      {
        name_hiragana: "の",
        name_katakana: "ノ",
        name_romaji: "no",
        audio_play: "/audio/no.mp3",
      },
      {
        name_hiragana: "は",
        name_katakana: "ハ",
        name_romaji: "ha",
        audio_play: "/audio/ha.mp3",
      },
      {
        name_hiragana: "ひ",
        name_katakana: "ヒ",
        name_romaji: "hi",
        audio_play: "/audio/hi.mp3",
      },
      {
        name_hiragana: "ふ",
        name_katakana: "フ",
        name_romaji: "fu",
        audio_play: "/audio/fu.mp3",
      },
      {
        name_hiragana: "へ",
        name_katakana: "ヘ",
        name_romaji: "he",
        audio_play: "/audio/he.mp3",
      },
      {
        name_hiragana: "ほ",
        name_katakana: "ホ",
        name_romaji: "ho",
        audio_play: "/audio/ho.mp3",
      },
      {
        name_hiragana: "ま",
        name_katakana: "マ",
        name_romaji: "ma",
        audio_play: "/audio/ma.mp3",
      },
      {
        name_hiragana: "み",
        name_katakana: "ミ",
        name_romaji: "mi",
        audio_play: "/audio/mi.mp3",
      },
      {
        name_hiragana: "む",
        name_katakana: "ム",
        name_romaji: "mu",
        audio_play: "/audio/mu.mp3",
      },
      {
        name_hiragana: "め",
        name_katakana: "メ",
        name_romaji: "me",
        audio_play: "/audio/me.mp3",
      },
      {
        name_hiragana: "も",
        name_katakana: "モ",
        name_romaji: "mo",
        audio_play: "/audio/mo.mp3",
      },
      {
        name_hiragana: "や",
        name_katakana: "ヤ",
        name_romaji: "ya",
        audio_play: "/audio/ya.mp3",
      },
      {
        name_hiragana: "ゆ",
        name_katakana: "ユ",
        name_romaji: "yu",
        audio_play: "/audio/yu.mp3",
      },
      {
        name_hiragana: "よ",
        name_katakana: "ヨ",
        name_romaji: "yo",
        audio_play: "/audio/yo.mp3",
      },
      {
        name_hiragana: "ら",
        name_katakana: "ラ",
        name_romaji: "ra",
        audio_play: "/audio/ra.mp3",
      },
      {
        name_hiragana: "り",
        name_katakana: "リ",
        name_romaji: "ri",
        audio_play: "/audio/ri.mp3",
      },
      {
        name_hiragana: "る",
        name_katakana: "ル",
        name_romaji: "ru",
        audio_play: "/audio/ru.mp3",
      },
      {
        name_hiragana: "れ",
        name_katakana: "レ",
        name_romaji: "re",
        audio_play: "/audio/re.mp3",
      },
      {
        name_hiragana: "ろ",
        name_katakana: "ロ",
        name_romaji: "ro",
        audio_play: "/audio/ro.mp3",
      },
      {
        name_hiragana: "わ",
        name_katakana: "ワ",
        name_romaji: "wa",
        audio_play: "/audio/wa.mp3",
      },
      {
        name_hiragana: "を",
        name_katakana: "ヲ",
        name_romaji: "wo",
        audio_play: "/audio/wo.mp3",
      },
      {
        name_hiragana: "ん",
        name_katakana: "ン",
        name_romaji: "n",
        audio_play: "/audio/n.mp3",
      },
    ];

    await queryInterface.bulkInsert("Cards", cards, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
