import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

public class Teste
{
	public static void main(String[] args)
	{
		new Teste().roda();
	}

	public void roda()
	{
		HttpURLConnection conn;
		try
		{
			URL url = new URL("http://www.ee.usp.br/biblioteca/whorta/doc/gua.pdf");
			conn = (HttpURLConnection) url.openConnection();
			conn.connect();
			int s = conn.getResponseCode();
			if (s == 200)
			{
				InputStream pdf = conn.getInputStream();
				File f = new File("C:\\Users\\LocalAdm/tese.pdf");
				f.createNewFile();
				Files.copy(pdf, f.toPath(), StandardCopyOption.REPLACE_EXISTING);
			}
		} catch (IOException e)
		{
			e.printStackTrace();
		}
	}
}
