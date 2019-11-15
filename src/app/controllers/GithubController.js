import api from "../../services/github";

class GithubController {
  async show(req, res) {
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
        sharpRepositories.push({
          avatar: element.owner.avatar_url,
          name: element.name,
          description: element.description
        });
      }
    });
    if (numberRepo) {
      return res.json(sharpRepositories[numberRepo]);
    }

    return res.json(sharpRepositories);
  }
}

export default new GithubController();
