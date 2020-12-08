const fs = require("fs");
exports.registerCmds = async function(commands){
  fs.readdir("./commands/", async (err, files) => {
  let dirs = files.filter((f) => !f.includes("."));
  await dirs.forEach(async (f) => {
    await fs.readdir("./commands/" + f + "/", async (err, files) => {
      let jsf = files.filter((fi) => fi.endsWith(".js"));
      await jsf.forEach(async (cmd) => {
        try {
          commands.set(
            require("./commands/" + f + "/" + cmd).info.name,
            "./commands/" + f + "/" + cmd
          );
          let alts = require("./commands/" + f + "/" + cmd).info.alts;
          alts.forEach((a) => {
            commands.set(a, "./commands/" + f + "/" + cmd);
          });
        } catch {}
      });
    });
  });
});
}