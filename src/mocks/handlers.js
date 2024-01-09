import { rest } from "msw";

const baseUrl = "https://drf-api-javfs-be8af6f30165.herokuapp.com/";

export const handlers = [
  rest.get(`${baseUrl}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "test_frontend",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "https://res.cloudinary.com/drffvkjy6/image/upload/v1/media/../default_profile_s9wc3f",
      })
    );
  }),
  rest.post(`${baseUrl}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
