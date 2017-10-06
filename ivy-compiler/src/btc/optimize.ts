export function optimize(instructions: string[]): string[] {
  const instructionsString = " " + instructions.join(" ")
  const optimizedInstructions = instructionsString
    .replace(/ 0 ROLL/g, "")
    .replace(/ 0 PICK/g, " DUP")
    .replace(/ 1 ROLL/g, " SWAP")
    .replace(/ 1 PICK/g, " OVER")
    .replace(/ 2 ROLL/g, " ROT")
    .replace(/ 1 VERIFY/g, "")
    .replace(/ 1 VERIFY/g, "")
    .replace(/ 1 VERIFY/g, "")
    .replace(/ SWAP SWAP/g, "")
    .replace(/ OVER OVER/g, " 2DUP")
    .replace(/ SWAP OVER/g, " TUCK")
    .replace(/ DROP DROP/g, " 2DROP")
    .replace(/ SWAP DROP/g, " NIP")
    .replace(/ 5 ROLL 5 ROLL/g, " 2ROT")
    .replace(/ 3 PICK 3 PICK/g, " 2OVER")
    .replace(/ 3 ROLL 3 ROLL/g, " 2SWAP")
    .replace(/ 2 PICK 2 PICK 2 PICK/g, " 3DUP")
    .replace(/ 1 ADD/g, " 1ADD")
    .replace(/ 1 (\d+) ADD/g, " $1 1ADD")
    .replace(/ 1 SUB/g, " 1SUB")
    .replace(/ SWAP (EQUAL|ADD|BOOLAND|BOOLOR|MIN|MAX)/g, " $1")
    .replace(/ DUP 2 PICK (EQUAL|ADD|BOOLAND|BOOLOR|MIN|MAX)/g, " 2DUP $1")
    .replace(/ (EQUAL|CHECKSIG|CHECKMULTISIG) VERIFY/g, " $1VERIFY")
    .replace(/ SHA256 RIPEMD160/g, " HASH160")
    .replace(/ SHA256 SHA256/g, " HASH256")
  return optimizedInstructions.slice(1).split(" ")
}
