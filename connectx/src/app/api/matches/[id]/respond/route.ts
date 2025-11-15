import { NextRequest, NextResponse } from "next/server";

// TODO: Replace with real database mutation
// This is a placeholder API endpoint for responding to matches

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  try {
    const body = await request.json();
    const { action } = body; // "connect" or "skip"

    // TODO: Implement with Prisma
    // const userId = await getCurrentUserId(request);
    // 
    // await prisma.matchResponse.create({
    //   data: {
    //     userId,
    //     matchId: id,
    //     action,
    //     respondedAt: new Date(),
    //   },
    // });
    //
    // if (action === "connect") {
    //   // Check if both users connected (mutual match)
    //   const otherUserResponse = await prisma.matchResponse.findFirst({
    //     where: {
    //       matchId: id,
    //       userId: { not: userId },
    //       action: "connect",
    //     },
    //   });
    //
    //   if (otherUserResponse) {
    //     // Create connection and send notifications
    //     await prisma.connection.create({
    //       data: {
    //         user1Id: userId,
    //         user2Id: otherUserResponse.userId,
    //         matchId: id,
    //       },
    //     });
    //   }
    // }

    // Mock response
    return NextResponse.json({
      success: true,
      message: action === "connect" ? "Match response recorded" : "Match skipped",
      matchId: id,
      action,
      mutualMatch: action === "connect" ? Math.random() > 0.5 : false, // Mock 50% mutual match rate
    });
  } catch (error) {
    console.error("Error in match response:", error);
    return NextResponse.json(
      { success: false, message: "Failed to record match response" },
      { status: 500 }
    );
  }
}
