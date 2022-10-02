/* Created by bar1k4real on 02.10.2022. */

export default function convertBytesToHuman(bytes) {
    if (typeof bytes != 'number' || bytes < 0)
        return false;
    if (bytes === 0)
        return "0.00 B";

    let sizes = [' B', ' KiB', ' MiB', ' GiB', ' TiB', ' PiB', ' EiB', ' ZiB', ' YiB'];
    let e = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, e)).toFixed(2) + sizes[e];
}
