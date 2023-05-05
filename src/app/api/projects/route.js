import pg from "@/lib/pg"
import redis from "@/lib/redis"

export async function GET(req) {
  try {
    let projects = await redis.get("portfolio:projects")

    if (!projects) {
      console.log("No cache found for portfolio:projects")
      projects = (await pg.query("SELECT * FROM projects")).rows
      await redis.set(
        "portfolio:projects",
        JSON.stringify(projects),
        "EX",
        3600 * 3
      )
      console.log("Cache set for portfolio:projects")
    } else {
      console.log("Cache found for portfolio:projects")
    }

    return new Response(JSON.stringify(projects), {
      status: 200,
    })
  } catch (err) {
    console.log(err)

    return new Response("Something went wrong", { status: 500 })
  }
}
