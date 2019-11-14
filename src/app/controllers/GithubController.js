import api from "../../services/github";

class GithubController {
  async store(req, res) {
    const { repo } = req.params;
    const response = await api.get(`/user/${repo}/repos`);
    console.log(response.data);
    return res.send(response.data);
  }
}

export default new GithubController();
