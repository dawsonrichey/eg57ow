import Vue from 'vue';

import $ from 'jquery';
import '@progress/kendo-ui';
import { Editor, EditorTool, EditorInstaller } from '@progress/kendo-editor-vue-wrapper';
import JSZip from 'jszip';

Vue.use(EditorInstaller);

new Vue({
    el: "#vueapp",
        data () {
            return {
                htmlText: `<p>
                    The Kendo UI Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
                    In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks, lists,
                    and image handling. The widget <strong>outputs identical HTML</strong> across all major browsers, follows
                    accessibility standards, and provides API for content manipulation.
                </p>
                <p>Features include:</p>
                <ul>
                        <li>Text formatting & alignment</li>
                        <li>Bulleted and numbered lists</li>
                        <li>Hyperlink and image dialogs</li>
                        <li>Cross-browser support</li>
                        <li>Identical HTML output across browsers</li>
                        <li>Gracefully degrades to a <code>textarea</code> when JavaScript is turned off</li>
                </ul>`
            }
        }
})
