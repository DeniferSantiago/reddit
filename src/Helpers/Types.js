/**
 * @typedef {import("react-native-paper/src/types").Theme} Theme
 */
/**
 * @typedef {Object} CustomColors
 * @property {String} secondary
 * @property {String} sutil
 * @property {String} similar
 * @property {String} shadow
 * @property {String} black
 * @property {String} white
 * @property {String} gray
 * @property {String} success
 * @property {String} warning
 * @property {String} error
 * @property {String} contrast
 * @property {String} icon
 * @property {String} transparent
 */
export const CustomColors = CustomColors;
/**
 * @typedef {Object} CustomSize
 * @property {Number} icons
 * @property {Number} chipsIcons
 * @property {Number} touchableIcons
 * @property {Number} smallIcons
 * @property {Number} bigIcons
 * @property {Number} loaders
 * @property {Number} bigLoaders
 * @property {Number} sheetsRadius
 * @property {Number} sectionsRadius
 * @property {Number} extraRadius
 * @property {Number} sectionsElevation
 * @property {Number} sheetElevation
 * @property {Number} itemElevation
 * @property {Number} objectElevation
 * @property {Number} bottomTabHeight
 */
export const CustomSize = CustomSize;
/**
 * @typedef {Object} FontSizes
 * @property {Number} small
 * @property {Number} smallLine
 * @property {Number} normal
 * @property {Number} normalLine
 * @property {Number} big
 * @property {Number} bigLine
 * @property {Number} subtitle
 * @property {Number} subtitleLine
 * @property {Number} title
 * @property {Number} titleLine
 * @property {Number} header
 * @property {Number} headerLine
 */
export const FontSizes = FontSizes;
/**
 * @typedef {Object} AppTheme
 * @property {CustomSize} size
 * @property {FontSizes} textSize
 * @property {CustomColors} colors
 */
/**
 * @typedef {AppTheme & Theme} CustomTheme
 */
export const CustomTheme = CustomTheme;
/**
 * @typedef {Object} Image
 * @property {({ url: string, height: number, width: number})[]} resolutions
 * @property {({ url: string, height: number, width: number})} source
 */
/**
 * @typedef {Object} Preview
 * @property {Image[]} images
 */
/**
 * @typedef {Object} Post
 * @property {String} id
 * @property {String} author
 * @property {String} title
 * @property {Number} createdUtc
 * @property {-1 | 1} vote
 * @property {Number} downs
 * @property {Number} ups
 * @property {Number} upvoteRatio
 * @property {Boolean} isVideo
 * @property {Number} numComments
 * @property {Preview} preview
 * @property {Number} score
 * @property {String} link
 * @property {String} subreddit
 * @property {String} subredditId
 * @property {Number} subredditSubscribers
 * @property {String} thumbnail
 */
/**
 * @typedef {Object} Meta
 * @property {String} icon
 * @property {String} text
 * @property {String} value
 */
/**
 * @typedef {Object} PostResponse
 * @property {Post[]} items
 * @property {String} after
 */
/**
 * @typedef {"best"|"hot"|"top"|"rising"|"new"} SortOptions
 */
/**
 * @typedef {({ id: String, vote: Number})} Vote
 */
