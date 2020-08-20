const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3StringUtils {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'stringutils',
            name: 'String Utils',
            blocks: [
                {
                    opcode: 'left',
                    blockType: BlockType.REPORTER,
                    text: 'left [TEXT][INDEX]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "string"
                        },
                        INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: "1"
                        }
                    }
                },
                {
                    opcode: 'right',
                    blockType: BlockType.REPORTER,
                    text: 'right [TEXT][INDEX]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "string"
                        },
                        INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: "1"
                        }
                    }
                },
                {
                    opcode: 'mid',
                    blockType: BlockType.REPORTER,
                    text: 'mid [TEXT][START][LEN]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "string"
                        },
                        START: {
                            type: ArgumentType.NUMBER,
                            defaultValue: "1"
                        },
                        LEN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: "2"
                        }
                    }
                }
            ],
            menus: {
            }
        };
    }

    left (args) {
        const text = Cast.toString(args.TEXT);
        const leftIndex = Cast.toNumber(args.INDEX);

        return text.substring(0, leftIndex);
    }

    right (args) {
        const text = Cast.toString(args.TEXT);
        const rightIndex = Cast.toNumber(args.INDEX);

        return text.substring(text.length - rightIndex, text.length);
    }

    mid (args) {
        const text = Cast.toString(args.TEXT);
        const startIndex = Cast.toNumber(args.START);
        const midLength = Cast.toNumber(args.LEN);

        return text.substring(startIndex, startIndex + midLength);
    }
}

module.exports = Scratch3StringUtils;