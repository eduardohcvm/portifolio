import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, lastName, phone, email, reason } = await request.json();

    // Configurar transporte (exemplo com Gmail)
    // Substitua <SEU_EMAIL> e <SUA_SENHA> ou use variáveis de ambiente
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Ex.: ''
        pass: process.env.EMAIL_PASS  // Senha ou App Password
      },
    });

    // Montar conteúdo do e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "eduhsuper@gmail.com", // Seu e-mail de destino
      subject: `Novo contato de ${name} ${lastName}`,
      text: `
        Nome: ${name} ${lastName}
        Telefone: ${phone}
        E-mail: ${email}
        Motivo: ${reason}
      `,
    };

    // Enviar e-mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "E-mail enviado com sucesso!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new Response(JSON.stringify({ error: "Falha ao enviar e-mail." }), {
      status: 500,
    });
  }
}
