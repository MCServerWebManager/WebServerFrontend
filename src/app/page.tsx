import {Button, Divider, TextField} from "@mui/material";

export default function Home() {
  return (
    <main className="flex h-full w-full items-start justify-center">
      <div className={"bg-white rounded-lg mt-4 hover:shadow-xl duration-200 flex flex-col p-4 bg-opacity-75 backdrop-blur"} style={{height:"400px", width: "350px"}}>
          <p className={"text-center text-2xl pb-2"}>LOGIN</p>
          <Divider/>
          <div className={"h-10"}></div>
          <TextField size={"small"} label="账号" variant="outlined" />
          <div className={"h-2"}></div>
          <TextField size={"small"} label="密码" variant="outlined" />

          <div className={"grow"}></div>
          <Button variant="outlined">确认</Button>

      </div>
    </main>
  )
}
