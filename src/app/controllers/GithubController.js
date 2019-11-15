import api from "../../services/github";
class GithubController {
  async store(req, res) {
    const { repo, numberRepo } = req.params;
    const response = await api.get(`users/${repo}/repos`, {
      params: {
        sort: "created",
        direction: "asc"
      }
    });
    const sharpRepositories = [];
    response.data.map(element => {
      if (element.language === "C#") {
        sharpRepositories.push(element);
      }
    });

    return res.json(sharpRepositories[numberRepo]);
  }
}

export default new GithubController();
