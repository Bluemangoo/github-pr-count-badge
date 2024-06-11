import router from "../../router";
import { isHexColor, isValidName } from "../../../utils/argument";
import axios from "axios";
import * as process from "node:process";
import { makeBadge } from "badge-maker";

router.on("/badge/pr-repo/", async function (data, response) {
    if (!isValidName(data.query.owner)) {
        response.response = "ERROR: Invalid owner";
        response.status = 500;
        return;
    }
    if (!isValidName(data.query.repo)) {
        response.response = "ERROR: Invalid repo";
        response.status = 500;
        return;
    }
    if (!isValidName(data.query.contributor)) {
        response.response = "ERROR: Invalid contributor";
        response.status = 500;
        return;
    }
    const labelColor = "#555";
    let color = "#4c1";
    if (data.query.color != null && isHexColor(data.query.color)) {
        response.response = "ERROR: Invalid color\n  tips: require hex color";
        response.status = 500;
        return;
    }
    if (data.query.color != null) {
        color = <string>data.query.color;
    }
    let count = -1;
    try {
        const query = `query{
  search(query: "repo:${data.query.owner}/${data.query.repo} author:${data.query.contributor} type:pr is:merged", type: ISSUE){
    issueCount
  }
}`;
        const res = await axios.post("https://api.github.com/graphql", JSON.stringify({ query }), {
            headers: {
                Authorization: `bearer ${process.env.PAT_1}`
            }
        });
        count = res.data.data.search.issueCount;
    } catch (e) {
        console.log(e);
        response.response = "ERROR: Failed to fetch pr count";
        response.status = 500;
        return;
    }
    response.response = makeBadge({
        label: "Merged PR",
        labelColor,
        message: count.toString(),
        color
    });
    response.contentType = "image/svg+xml";
});
