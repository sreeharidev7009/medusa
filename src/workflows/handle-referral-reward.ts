// src/workflows/handle-referral-reward.ts
export async function handleReferralRewardWorkflow(container) {
  return {
    run: async ({ input }) => {
      const referralService = container.resolve("referralService")
      const { code, referred_customer_id } = input

      await referralService.registerReferralUsage(code, referred_customer_id)

      // TODO: Add reward to referrer (coupon/points)

      return { success: true }
    },
  }
}
