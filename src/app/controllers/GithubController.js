import api from "../../services/github";

class GithubController {
  async store(req, res) {
    // const { repo } = req.params;
    // const response = await api.get(`users/${repo}/repos`);

    return res.json({ message: "Funcionando" });
  }
}

export default new GithubController();
