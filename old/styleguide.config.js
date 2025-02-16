const path = require('path');

module.exports = {
    components: 'src/components/PulseText/PulseText.jsx',
    context: {
        styles: path.resolve(__dirname, 'src/components/PulseText/css/examples.css')
    },
    getComponentPathLine(componentPath) {
        return 'import PulseText from react-pulse-text';
    },
    sections: [
        {
            name: 'Introduction',
            content: 'docs/Introduction.md'
        },
        {
            name: 'Install',
            content: 'docs/Install.md'
        },
        {
            name: 'Usage',
            components: 'src/components/PulseText/PulseText.jsx'
        }
    ],
    title: 'React Pulse Text',
    usageMode: 'expand',

};
