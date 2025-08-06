# A Cline fork that enables workspace Adjusted Versions
This is relative cline compatible and is a cline fork but has a Workspace Centric view of things.
It strips down cline mcp stuff it will not use own tools global stored it uses tools and 
mcp servers defined in the workspace. It also support templating of the cline extension 
via workspace files.

it ships also with value able mcp implementations like 
- git auto commit
- worktree checkouts for long running tasks


## Failures of the remote branch
- Does factor to nativ fs away from workspace api https://github.com/cline/cline/blob/main/src/integrations/workspace/WorkspaceTracker.ts
- Does integrate everything on the backend.
- Is not coded with good analyzeable coding patterns.
- mainly type and grpc ejaculation and masturbation.

interface MessageFns<T> { in packages\@cline\extension\src\shared\proto\cline\common.ts needs export



needs to get resolved import { BinaryReader, BinaryWriter } from "../../../bufbuild/protobuf/wire";