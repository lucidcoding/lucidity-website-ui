/*import * as d3 from "d3";
import t from "App/Translate";
import * as TextHelpers from "Utils/textHelpers";

const getTitle = (startMoment, endMoment) =>
    `${d3.timeFormat("%d")(startMoment)} ` +
    `${t.get(TextHelpers.titleCaseToCamelCase(d3.timeFormat("%b")(startMoment)))} ` +
    `${d3.timeFormat("%Y %H:%M")(startMoment)} - ` +
    `${d3.timeFormat("%d")(endMoment)} ` +
    `${t.get(TextHelpers.titleCaseToCamelCase(d3.timeFormat("%b")(endMoment)))} ` +
    `${d3.timeFormat("%Y %H:%M")(endMoment)}`;

export default getTitle;*/

const getTitle = (startMoment: any, endMoment: any) => "Test title";

export default getTitle;
