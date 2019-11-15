import api from "../../services/github";
class GithubController {
  async show(req, res) {
    console.log("cheguei aqui1");
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

    return res.json(sharpRepositories[numberRepo]);
  }
}

export default new GithubController();
