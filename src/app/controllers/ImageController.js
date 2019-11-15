import api from "../../services/github";

class ImageController {
  async show(req, res) {
    const { repo } = req.params;
    const response = await api.get(`users/${repo}`);
    return res.json({ avatar: response.data.avatar_url });
  }
}

export default new ImageController();
