// Browser environment
if(typeof window !== 'undefined') {
    JSZip = (typeof window.JSZip !== 'undefined') ? window.JSZip : require('JSZip');
}